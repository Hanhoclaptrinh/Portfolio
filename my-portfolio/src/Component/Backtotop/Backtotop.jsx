import { useState, useEffect } from "react";
import "./backtotop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // hiển thị nút khi cuộn xuống quá 200px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // thêm event listener khi component được mount
    window.addEventListener("scroll", handleScroll);

    // cleanup event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <i className="icon-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
