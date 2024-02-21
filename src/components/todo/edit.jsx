import { useState, useEffect } from "react";
import { useLoaderData, Form, useNavigation } from "react-router-dom";
// draft-js
import { EditorState, convertToRaw, ContentState } from "draft-js";
// react-draft-wysiwyg
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
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

export const Edit = () => {
  const { todo } = useLoaderData();
  const { navigate } = useNavigation();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (_editorState) => {
    setEditorState(_editorState);
  };

  useEffect(() => {
    if (todo.description) {
      const blocksFromHtml = htmlToDraft(todo.description);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [todo.description]);

  return (
    <div
      className='bg-stone-50 border border-stone-300 rounded-md p-4 shadow-sm'
      style={{
        minWidth: "400px",
        maxWidth: "768px",
      }}
    >
      <h1>Edit Todo</h1>
      {todo && (
        <Form method='post' className='flex flex-col'>
          <h2>{todo.id}</h2>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' defaultValue={todo.title} name='title' className='bg-none' />
          <label htmlFor='description'>Description</label>
          {/* <textarea id='description' defaultValue={todo.description} name='description' /> */}
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
            <button role='button' onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </div>
  );
};
