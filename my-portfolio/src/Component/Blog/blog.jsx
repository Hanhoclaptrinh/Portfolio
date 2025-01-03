import './blog.css';
import blog1 from '../../assets/blog-1.svg';
import blog2 from '../../assets/blog-2.svg';
import blog3 from '../../assets/blog-3.svg';
const Blog = () => {
    return (
        <>
            <section className="blog container section" id="blog">
                <h2 className="section__title">Latest blog posts</h2>
                <div className="blog__container grid">
                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#"><span className="blog__category">Reviews</span></a>
                            <a href="#"><img src={blog1} alt="" className='blog__img'/></a>
                        </div>
                        <div className="blog__detail">
                            <h3 className="blog__title"><a href="#">5 Best App Development Tool for Your Projects</a></h3>
                            <div className="blog__meta">
                                <span>09 February, 2022</span>
                                <span className="blog__dot">.</span>
                                <span>Bolby</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#"><span className="blog__category">Tutorial</span></a>
                            <a href="#"><img src={blog2} alt="" className='blog__img'/></a>
                        </div>
                        <div className="blog__detail">
                            <h3 className="blog__title"><a href="#">Common Misconceptions About Payment</a></h3>
                            <div className="blog__meta">
                                <span>07 February, 2022</span>
                                <span className="blog__dot">.</span>
                                <span>Bolby</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#"><span className="blog__category">Business</span></a>
                            <a href="#"><img src={blog3} alt="" className='blog__img'/></a>
                        </div>
                        <div className="blog__detail">
                            <h3 className="blog__title"><a href="#">3 Things to know about startup business</a></h3>
                            <div className="blog__meta">
                                <span>05 February, 2022</span>
                                <span className="blog__dot">.</span>
                                <span>Bolby</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;