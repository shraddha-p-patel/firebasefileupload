import React, { Component } from "react";
import { storage } from "../Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default class FileUploadClassController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFiles: [],
      uploadedFilesBase64: [],
    };
  }

  fileToDataUri = (image) => {
    return new Promise((res) => {
      console.log("fileToDataUri", image);
      const reader = new FileReader();
      const { type, name, size } = image; //destructuring
      console.log("reader", reader);
      reader.addEventListener("load", () => {
        res({ upload: reader.result, name });
      });
      reader.readAsDataURL(image);
    });
  };
  handleDocumentUpload = async (e) => {
    console.log("HandleDocumentUpload");
    const tempUploadedFiles = [].slice.call(e.target.files);
    console.log(
      "Attached Images :",
      this.state.uploadedFiles,
      tempUploadedFiles
    );

    tempUploadedFiles.forEach((file) => {
      return {
        name: file.name,
      };
    });
    const newImages = [];

    for (let i = 0; i < e.target.files.length; i++) {
      newImages.push(this.fileToDataUri(e.target.files[i]));
    }
    const fileBase64 = await Promise.all(newImages);
    {
      console.log("fileBase64", fileBase64);
    }
    this.setState({
      uploadedFilesBase64: fileBase64,
      uploadedFiles: [...this.state.uploadedFiles, ...tempUploadedFiles],
    });
  };

  removeFile = (fileName) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(
        (file) => file.name !== fileName
      ),
      // uploadedFilesBase64: this.state.uploadedFilesBase64.filter(
      //   (file) => file.name !== fileName
      // ),
    });
  };

  submitBtn = () => {
    const uploadimage = this.state.uploadedFilesBase64.map((doc) => doc.upload);
    console.log("submit successfully", this.state.uploadedFilesBase64);
  };
  render() {
    return <div></div>;
  }
}
