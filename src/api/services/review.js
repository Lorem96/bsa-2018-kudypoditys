const Service = require("./generalService");
const reviewRepository = require("../repositories/reviewRepository");

class ReviewService extends Service {
    getAllReviews() {
        return reviewRepository.findAll();
    }

    getReviewById(id) {
        return reviewRepository.findById(id);
    }

    addReview(review) {
        return reviewRepository.create(review);
    }

    updateReview(id, review) {
        return reviewRepository.updateById({ _id: id }, review);
    }

    deleteReview(id) {
        return reviewRepository.deleteById({ _id: id });
    }

    async findByOptions(options) {
        try {
            const reviews = await this.repository.findByOptions(options);
            return Promise.resolve(reviews);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

module.exports = new ReviewService(reviewRepository);
