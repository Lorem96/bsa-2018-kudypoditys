const elasticRepository = require("./index");
const elasticsearch = require("elasticsearch");
const init = require("./init");
const PropertyService = require("./../services/property");
const CityService = require("./../services/city");
const elasticClient = new elasticsearch.Client({
    hosts: ["http://localhost:9200"],
});

module.exports = {
    initService: async (req, res) => {
        var citiesInit = init.initIndex.body;
        citiesInit.mappings.document.properties = {
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
        };

        var propertiesInit = init.initIndex.body;
        propertiesInit.mappings.document.properties = {
            id: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            name: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            description: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            location: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            }
        };

        await elasticRepository.initIndex(req, res, "cities", citiesInit);
        await elasticRepository.initIndex(
            req,
            res,
            "properties",
            propertiesInit,
        );

        return res.json({message: "ELASTICSEARCH::INIT_SERVICE => SUCCESS"});
    },

    addService: (req, res) => {
        // ADD PROPERTIES INTO ELASTICSEARCH
        PropertyService.getAllProperties().then(properties => {
            console.log(`properties!!!!: ${JSON.stringify(properties)}`);
            let propertiesBulk = [];
            properties.forEach(property => {
                propertiesBulk.push({
                    index: {
                        _index: "properties",
                        _type: "document",
                    },
                });
                propertiesBulk.push({
                    name: property.name,
                    rating: property.rating,
                    images: property.images,
                    city: property.city.name,
                    description: property.description,
                });
            });
            return elasticClient.bulk({body: propertiesBulk}, function (
                err,
                resp,
            ) {
                if (err) {
                    console.log("Failed Bulk operation", err);
                    return res.json(err);
                } else {
                    console.log(
                        "Successfully imported properties",
                        properties.length,
                    );
                }
            });
        });

        // ADD CITIES FROM PROPERTIES TO ELASTICSEARCH
        CityService.getAllCities().then(cities => {
            let citiesBulk = [];
            cities.forEach(city => {
                citiesBulk.push({
                    index: {
                        _index: "cities",
                        _type: "document",
                    },
                });

                citiesBulk.push({
                    city: city.name,
                });
            });
            return elasticClient.bulk({body: citiesBulk}, function (
                err,
                resp,
            ) {
                if (err) {
                    console.log("Failed Bulk operation", err);
                    return res.json(err);
                } else {
                    console.log(
                        "Successfully imported cities",
                        cities.length,
                    );
                }
            });
        });

        return res.json({message: "ELASTICSEARCH::ADD_SERVICE => SUCCESS"});
    },

    addOneProperty: (req, res, property) => {
        const index = "properties";
        const id = property.id;
        const type = "document";
        const body = {
            id: property.id,
            name: property.name,
            city: property.city,
            country: property.country,
            location: property.location
        };

        return elasticClient.index({ index, id, type, body });
    }
};
