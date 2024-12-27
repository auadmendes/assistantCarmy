import { Message as AIMessage } from "@ai-sdk/ui-utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Button, message, Spin } from "antd";

import CircleCarmyLogo from "@/assets/circle-carmy-logo";
import usersGlobalStore from "@/store/users-store";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef, useState } from "react";
import { Check, Copy, Share } from "lucide-react";
import { ShareMessage } from "./share-message";
import { fetchCarPartDetails } from "@/utils/fetchCarPartDetails";
import { extractPriceDetailsFromMessage } from "@/utils/extractCarDetails";
import Link from "next/link";

interface MessageProps {
  messages: AIMessage[];
  isLoading: boolean;
}

interface CodeBlockProps {
  className?: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className, children }) => {
  const language = className?.replace("language-", "") || ""; // extract language
  return (
    <SyntaxHighlighter style={theme} language={language}>
      {children as string}
    </SyntaxHighlighter>
  );
};

export function Messages({ messages, isLoading }: MessageProps) {
  const { loggedInUserData } = usersGlobalStore();
  const messagesRef = useRef<any>(null);
  const [copiedMessage, setCopiedMessage] = useState<string>("");

  const [messageToShare, setMessageToShare] = useState<string>("");
  const [openShareModal, setOpenShareModal] = useState<boolean>(false);

  function handleCopyMessage(content: string) {
    try {
      navigator.clipboard.writeText(content);
      setCopiedMessage(content);
    } catch (error: any) {
      message.error("Failed to copy message");
    }
  }

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isLoading && messages.length === 0) {
    return (
      <div className="flex items-center justify-center text-text h-full">
        <div className="flex flex-col leading-5 text-text text-sm">
          <div className="flex gap-1 text-xl">
            <span>Hello</span>
            <span>{loggedInUserData?.name}!</span>
          </div>
          <div className="flex gap-1 text-xl">
            <p>
              I am{" "}
              <strong className="font-bold text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Carmy
              </strong>{" "}
              your mechanic assistant, how can I help you today?
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-7 text-sm h-full overflow-auto p-1 lg:p-7"
      ref={messagesRef}
    >
      {messages?.map((message) => {
        if (message.role === "user") {
          return (
            <div
              key={message.id}
              className="flex items-center justify-center max-w-full md:max-w-[40vw] 
             self-end whitespace-normal border border-primary p-3 
             rounded box-border"
            >
              <div>
                <Markdown
                  rehypePlugins={[rehypeRaw]} // Enables raw HTML parsing if needed
                  remarkPlugins={[remarkGfm]} // For GitHub-flavored markdown
                  components={{
                    code({ className, children }) {
                      return (
                        <CodeBlock className={className}>{children}</CodeBlock>
                      );
                    },
                    a: ({ node, ref, ...props }) => (
                      <Link
                        {...props}
                        href={props.href ?? ""}
                        target="_blank"
                        className="text-link hover:underline"
                      />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong
                        className="font-semibold text-accent text-lg"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-xl text-text p-0 mb-0" {...props} />
                    ),
                  }}
                >
                  {message.content}
                </Markdown>
              </div>
            </div>
          );
        }
        return (
          <div key={message.id} className=" relative flex gap-2">
            <div
              className="absolute -bottom-4 left-4 flex  items-center justify-center border border-accent 
                        rounded-full w-8 h-8 "
            >
              <CircleCarmyLogo />
            </div>
            <div className="flex-1 mr-3 whitespace-normal w-full lg:max-w-[60vw] bg-card rounded p-4">
              <Markdown
                rehypePlugins={[rehypeRaw]} // Enables raw HTML parsing if needed
                remarkPlugins={[remarkGfm]} // For GitHub-flavored markdown
                components={{
                  code({ className, children }) {
                    return (
                      <CodeBlock className={className}>{children}</CodeBlock>
                    );
                  },
                  a: ({ node, ref, ...props }) => (
                    <Link
                      {...props}
                      href={props.href ?? ""}
                      target="_blank"
                      className="text-link hover:underline"
                    />
                  ),
                  li: ({ node, ref, ...props }) => (
                    <li {...props} className="text-text text-lg p-1" />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-button" {...props} />
                  ),
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-4xl font-bold text-blue-600"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl font-semibold text-green-500 p-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-lg text-text mb-0 p-2" {...props} />
                  ),
                }}
              >
                {message.content}
              </Markdown>
              <div className="flex">
                <Button
                  ghost
                  className="border-none"
                  onClick={() =>
                    copiedMessage !== message.content &&
                    handleCopyMessage(message.content)
                  }
                >
                  {copiedMessage === message.content ? (
                    <Check size={16} className="text-carmy" />
                  ) : (
                    <Copy size={16} className="text-text" />
                  )}
                </Button>
                <Button
                  ghost
                  className="border-none"
                  onClick={() => {
                    setMessageToShare(message.content);
                    setOpenShareModal(true);
                  }}
                >
                  <Share size={16} className="text-text" />
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-start">
        {isLoading && <Spin size="small" className="text-text" />}
      </div>
      <ShareMessage
        open={openShareModal}
        setOpen={setOpenShareModal}
        messageToShare={messageToShare}
      />
    </div>
  );
}

// cost estimation
// ask before about country
