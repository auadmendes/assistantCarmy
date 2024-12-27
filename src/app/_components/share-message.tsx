import { Modal } from "antd";

import {
    WhatsappShareButton, WhatsappIcon,
    LinkedinShareButton, LinkedinIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton , TelegramIcon,
    EmailShareButton, EmailIcon
  } from "react-share";

interface ShareMessageProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    messageToShare: string
}

export function ShareMessage({open, setOpen, messageToShare}: ShareMessageProps) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            title=" Share Message"
            centered
            footer={null}
            className="mx-14"
        >
            <div className="flex flex-wrap gap-5 width-full p-4 items-center justify-center">
                <WhatsappShareButton
                    url={messageToShare}
                >
                    <WhatsappIcon />
                </WhatsappShareButton>

                <LinkedinShareButton
                    url={messageToShare}
                >
                    <LinkedinIcon />
                </LinkedinShareButton>

                <FacebookShareButton
                    url={messageToShare}
                >
                    <FacebookIcon />
                </FacebookShareButton>

                <TelegramShareButton
                    url={messageToShare}
                >
                    <TelegramIcon />
                </TelegramShareButton>

                <EmailShareButton
                    url={messageToShare}
                >
                    <EmailIcon />
                </EmailShareButton>
            </div>
        </Modal>
    )
}