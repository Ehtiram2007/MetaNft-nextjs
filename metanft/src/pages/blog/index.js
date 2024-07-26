import BlogPage from "@/components/home/BlogPage";
import MockData from "@/components/data/MockData";
import { useState } from "react";

const Blog = () => {
  const [item] = useState(MockData);
  return (
    <main>
      <section
        id="back_img"
        style={{
          backgroundImage:
            "url(https://metanft.hasnaanajmi.org/images/footer-animation-bg.svg)",
        }}
      >
        <div className="container">
          <h3>Our Blog</h3>
        </div>
      </section>
      <BlogPage item={item}/>
    </main>
  );
};
export default Blog;