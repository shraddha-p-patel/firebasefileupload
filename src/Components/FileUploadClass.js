import React, { Component } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FileUploadClassController from "./FileUploadClassController";
import DeleteIcon from '@mui/icons-material/Delete';

export default class FileUploadClass extends FileUploadClassController {
  render() {
   
    return (
      <>
        <Container>
          <Grid item style={{ paddingTop: "3px" }}>
            <Typography component="label">
              <AttachFileIcon fontSize="small"></AttachFileIcon>
              <span>Attach file </span>
              <input
                type="file"
                hidden
                accept="image/*,.pdf,.doc,.docx,.dot,.docm"
                multiple={true}
                onChange={this.handleDocumentUpload}
              />
            </Typography>
          </Grid>

          <Grid item>
            {console.log("uploadedFiles", this.state.uploadedFiles)}
            {this.state.uploadedFiles.map((file, index) => {
              return (
                <div key={index}>
                  <Grid item xs={12}>
                    <br />
                    {file.name}
                    <br />
                  </Grid>
                  <DeleteIcon
                    style={{ fill: "#ff4747", fontSize: "1.3rem" }}
                    onClick={() => this.removeFile(file.name)}
                  ></DeleteIcon>

                  {/* {console.log("file", file.type)} */}
                </div>
              );
            })}
          </Grid>

          <Grid item>
            <button onClick={this.submitBtn}>submit Image</button>
          </Grid>
        </Container>
      </>
    );
  }
}
