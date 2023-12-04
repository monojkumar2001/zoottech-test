import React from "react";
import Link from "next/link";
//IMPORT POST DATA TO API
import useSWR from "swr";
const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function RecentPost() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/topBlog`, fetcher);
  if (error) {
    return <h1 className="text-center">Failed to load Data </h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="col-lg-4 col-md-12">
      <aside className="widget-area">
        <div className="widget widget_recent_post">
          <h3 className="widget-title">Recent Post</h3>

          {data.map((post) => (
            <article className="item" key={post.id}>
              <a href="#" className="thumb">
                <img src={post.url_image} alt={post.meta_title} />
              </a>
              <div className="info">
                <span>{post.date}</span>
                <h4 className="title usmall">
                  <Link href={"/post/" + post.slug}>{post.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default RecentPost;
