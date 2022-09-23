import React, { useEffect, useState } from "react";
import { storage } from "../Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FileUpload = () => {
  const [imgupload, setImgUpload] = useState(null);
  const [imgList, setImgList] = useState([]);

  const imgListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imgupload === null) return;
    const imgRef = ref(storage, `images/${imgupload.name + v4()}`);
    uploadBytes(imgRef, imgupload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
        alert("image upload successfully");
      });
    });
  };
  //comment
  useEffect(() => {
    listAll(imgListRef).then((res) => {
      // console.log(res);
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <>
      <input type="file" onChange={(e) => setImgUpload(e.target.files[0])} />
      <button onClick={uploadImage}>Upload Image</button>
      {imgList.map((url, id) => {
        return (
          <div key={id}>
            <div></div>
            <img src={url} style={{ height: "300px", width: "500px" }} />
          </div>
        );
      })}
    </>
  );
};

export default FileUpload;
