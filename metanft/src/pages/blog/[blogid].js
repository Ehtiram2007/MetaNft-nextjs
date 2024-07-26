import Link from "next/link";

const Idpage = ({ data }) => {
  return (
    <>
      <section
        id="back_img"
        style={{
          backgroundImage:
            "url(https://metanft.hasnaanajmi.org/images/footer-animation-bg.svg)",
        }}
      >
        <div className="container">
          <h3>Blog details</h3>
        </div>
      </section>
      <section id="blogid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-item">
                <div className="img">
                  <img src={data.img} />
                </div>
                <div className="blog-text">
                  <div className="post-text">
                    <p>{data.title}</p>
                    <Link href="#">{data.body}</Link>
                  </div>
                  <div className="info">
                    <img src={data.user} />
                    <div className="info-content">
                      <Link href="#">{data.desc}</Link>
                      <p>September 17, 2022</p>
                    </div>
                  </div>
                  <div className="p-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </p>
                    <p>
                      Excepteur sint ocacat cupidatat non proi dent sunt in
                      culpa qui officia deserunt.mollit anim id est laborum. sed
                      ut pers piciatis unde omnis iste natus error.sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Idpage;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://json-server-tan-kappa.vercel.app/data/${context.params.blogid}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};