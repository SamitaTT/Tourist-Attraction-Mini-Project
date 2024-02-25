import axios from "axios";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

function Content() {
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [blogPost, setBlogPost] = useState([]);
  const getBlogPost = async () => {
    try {
      const result = await axios.get(`http://localhost:4001/trips?keywords=`);
      setBlogPost(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getBlogPostBySearchText = async (text) => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${text}`
      );
      setBlogPost(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchText) {
      getBlogPostBySearchText(searchText);
    } else {
      getBlogPost();
    }
  }, [searchText]);

  const copyToClipBoard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied to clipboard:");
    } catch (error) {
      alert("Unable to copy link to clipboard");
    }
  };

  const handleTagClick = (tag) => {
    setInputValue((prevInputValue) => prevInputValue + tag + " ");
    setSearchText((prevSearchText) => prevSearchText + tag + " ");
  };

  return (
    <main className="flex flex-col">
      <div className="flex justify-center">
        <p className="font-Kanit p-3 w-[1010px]">ค้นหาที่เที่ยว</p>
      </div>
      <input
        type="text"
        className="font-Kanit text-center mb-5 p-1.5 border-b-2 w-[950px] ml-auto mr-auto focus:outline-none"
        placeholder="หาที่แล้วไปเที่ยวกัน ..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setSearchText(e.target.value);
        }}
      ></input>
      <div className="flex flex-col ml-auto mr-auto w-[1010px]">
        {blogPost.map((item) => {
          return (
            <div
              className="flex flex-row gap-5 justify-start content-center mb-5 mt-5 ml-auto mr-auto w-full"
              key={item.eid}
            >
              <div className="thumbnail-img h-[200px] w-[290px]">
                <img
                  className="object-cover h-full w-full rounded-3xl"
                  src={item.photos[0]}
                ></img>
              </div>
              <div className="place-info">
                <a
                  href={item.url}
                  target="_blank"
                  className="font-bold font-Kanit text-xl hover:text-sky-500"
                >
                  {item.title}
                </a>
                <p className="font-Kanit font-light">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)} ...`
                    : item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-sky-600 underline underline-offset-1 font-Kanit font-light hover:text-blue-600"
                >
                  อ่านต่อ
                </a>
                <div className="flex flex-row gap-2">
                  <span className="font-Kanit font-light">หมวด</span>
                  {item.tags.map((tag, index) => {
                    return (
                      <div key={index}>
                        {index === item.tags.length - 1 ? (
                          <span className="font-Kanit font-light no-underline">
                            และ{" "}
                            <span
                              className="font-Kanit font-light underline underline-offset-1 hover:cursor-pointer"
                              onClick={() => {
                                handleTagClick(tag);
                              }}
                            >
                              {tag}
                            </span>
                          </span>
                        ) : (
                          <span
                            className="font-Kanit font-light underline underline-offset-1 hover:cursor-pointer"
                            onClick={() => {
                              handleTagClick(tag);
                            }}
                          >
                            {tag}
                          </span>
                        )}
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
                  <div
                    className="border-2 rounded-full border-sky-500 p-1 h-[40px] w-[40px] ml-[280px] mt-10 hover:cursor-pointer hover:border-blue-600 group"
                    onClick={() => {
                      copyToClipBoard(item.url);
                    }}
                  >
                    <FaLink className="h-[30px] w-[30px] object-center p-0.5 text-sky-500 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Content;
