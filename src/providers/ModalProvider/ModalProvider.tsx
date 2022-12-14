import React, { useEffect, useState } from "react";
import { Comment } from "components";
import { Modal } from "ui";
import { withDisplayName } from "hoc";
import { commentService } from "services";

interface ModalContextType {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  setPostId: (postId: number) => void;
}

export const ModalContext = React.createContext<ModalContextType>({
  isVisible: false,
  setIsVisible: (isVisible) => {},
  setPostId: (postId) => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [postId, setPostId] = useState<number>(0);

  const value = { isVisible, setIsVisible, setPostId };

  useEffect(() => {
    commentService
      .getCommentsByPostId(postId)
      .then((response) => setComments(response));
  }, [postId]);

  return (
    <ModalContext.Provider value={value}>
      {isVisible && (
        <Modal setIsVisible={setIsVisible}>
          {comments.map((item) => (
            <Comment key={item.id} content={item.body} />
          ))}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.displayName = "ModalProvider";

export default withDisplayName(ModalProvider);
