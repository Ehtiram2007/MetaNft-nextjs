import SideBar from "@/components/home/Sidebar";   
import Link from "next/link";

const BlogPage = ({ item }) => {

  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              {item.map((post) => {
                const { img, id, user, desc, body, title } = post;
                return (
                  <div key={id} className="col-lg-6">
                    <div className="blog_item">
                      <img src={img} alt="" />
                      <div className="blog-inf">
                        <div className="content">
                          <span>{title}</span>
                          <h3>
                            <Link
                              href={{
                                pathname: "/blog/[blogid]",
                                query: { blogid: id },
                              }}
                            >
                              {body}
                            </Link>
                          </h3>
                        </div>
                        <div className="user-content">
                          <img src={user} alt="" />
                          <span>{desc}</span>
                          <p>September 17, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
