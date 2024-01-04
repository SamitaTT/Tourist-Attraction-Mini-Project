import axios from "axios";
import { useEffect, useState } from "react";

function PlaceList() {
  const [blogPost, setBlogPost] = useState([]);
  const getBlogPost = async () => {
    try {
      const result = await axios.get("http://localhost:4001/trips?keywords=");
      setBlogPost(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogPost();
  });
  return (
    <main>
      {blogPost.map((item) => {
        return (
          <div className="flex flex-row gap-5" key={item.eid}>
            <div className="thumbnail-img">
              <img
                className="object-cover h-[200px] w-[290px]"
                src={item.photos[0]}
              ></img>
            </div>
            <div className="place-info">
              <h3 className="font-bold">{item.title}</h3>
              <p>
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)} ...`
                  : item.description}
              </p>
              <a
                href={item.url}
                className="text-sky-600 underline underline-offset-1"
              >
                อ่านต่อ
              </a>
              <div className="flex flex-row gap-2">
                <p>หมวด</p>
                {item.tags.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row">
                <img src="https://dummyimage.com/85x85/000/fff"></img>
                <img src="https://dummyimage.com/85x85/000/fff"></img>
                <img src="https://dummyimage.com/85x85/000/fff"></img>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default PlaceList;
