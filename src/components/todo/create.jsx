import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
// draft-js
import { EditorState, convertToRaw } from "draft-js";
// react-draft-wysiwyg
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/css/editor.css";

const toolbarOptions = {
  options: [
    "inline",
    "blockType",
    "fontSize",
    "fontFamily",
    "list",
    "textAlign",
    "colorPicker",
    "link",
    "emoji",
    "remove",
    "history",
  ],
};

export const Create = () => {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (_editorState) => {
    setEditorState(_editorState);
  };

  return (
    <div className='card'>
      <div className='card-header'>Edit To Do </div>
      <Form method='post' className='flex flex-col card-body'>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' name='title' className='bg-none' />
        <label htmlFor='description'>Description</label>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName='wrapper-class'
          editorClassName='editor-class'
          toolbarClassName='toolbar-class'
          toolbar={toolbarOptions}
        />
        <input type='hidden' name='description' value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
        <div className='flex gap-4 justify-end'>
          <button type='submit' className='btn-submit' role='button'>
            Save
          </button>
          <button role='button' onClick={() => navigate("..", { relative: "path" })}>
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};
