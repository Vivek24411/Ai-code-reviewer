import React, { useState } from "react";
import axios from "axios";
import 'prismjs/themes/prism-tomorrow.css'
import Prism from "prismjs"
import Editor from "react-simple-code-editor";
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Coding(){

    const [code,setCode] = useState('')
    const [review,setReview] = useState('')
    
    async function reviewByAI(){
            const response = await axios.post(`${import.meta.env.VITE_BASE_URI}/code/codeReview`,{
                code
            })
            if(response.status === 200){
                setReview(response.data)
            }
    }

        return <>
            <div className="h-screen w-screen flex gap-1 bg-gray-900 p-3" >
                <div className="w-1/2 h-full p-2 bg-black border-1 rounded-2xl flex gap-10 flex-col">
                  <div className="h-[80vh]" style={{
                    overflow:'auto'
                  }}>
                    <Editor
                      value={code}
                      onValueChange={setCode}
                      padding={10}
                      highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
                      className="h-full w-full text-white "
                      style={{
                        overflow:'auto'
                      }}
                    />
                  </div>
                  <button
                    onClick={reviewByAI}
                    className="bg-blue-800 font-medium  mt-2 self-end text-2xl px-3 py-2 rounded-2xl"
                  >
                    Review Code
                  </button>
                </div>
                <div className="w-1/2 h-full bg-gray-800 border-1 rounded-2xl m-2 p-2 overflow-auto">
                  <pre className="text-white whitespace-pre-wrap break-words"><Markdown  rehypePlugins={[ rehypeHighlight ]} >{review}</Markdown></pre>
                </div>
            </div>
        </>
}

export default Coding