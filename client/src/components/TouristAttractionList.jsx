import axios from "axios";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

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
    <main className="flex flex-col ml-auto mr-auto w-[1100px]">
      {blogPost.map((item) => {
        return (
          <div
            className="flex flex-row gap-5 justify-start content-center mb-5 mt-5 ml-auto mr-auto w-[1010px]"
            key={item.eid}
          >
            <div className="thumbnail-img h-[200px] w-[290px]">
              <img
                className="object-cover h-full w-full rounded-3xl"
                src={item.photos[0]}
              ></img>
            </div>
            <div className="place-info">
              <h3 className="font-bold font-Kanit text-xl ">{item.title}</h3>
              <p className="font-Kanit font-light">
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)} ...`
                  : item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                className="text-sky-600 underline underline-offset-1 font-Kanit font-light"
              >
                อ่านต่อ
              </a>
              <div className="flex flex-row gap-2">
                <p className="font-Kanit font-light">หมวด</p>
                {item.tags.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="font-Kanit font-light underline underline-offset-1">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row gap-7 mt-3">
                <img
                  src={item.photos[1]}
                  className="object-cover h-[85px] w-[85px] rounded-lg"
                ></img>
                <img
                  src={item.photos[2]}
                  className="object-cover h-[85px] w-[85px] rounded-lg"
                ></img>
                <img
                  src={item.photos[3]}
                  className="object-cover h-[85px] w-[85px] rounded-lg"
                ></img>
                <div className="border-2 rounded-full border-sky-500 p-1 h-[40px] w-[40px] ml-[280px] mt-10">
                  <FaLink className="h-[30px] w-[30px] text-sky-500 object-center p-0.5" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default PlaceList;
