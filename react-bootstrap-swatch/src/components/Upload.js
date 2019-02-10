import React from 'react';

const Upload = (props) => {

    return (
    <fieldset>
        <legend>Upload</legend>
        <div class="form-group">
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02"/>
            <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
          </div>
          <div class="input-group-append">
            <span class="input-group-text" id="">Upload</span>
          </div>
        </div>
      </div>
    </fieldset>
    )
}

export default Upload;