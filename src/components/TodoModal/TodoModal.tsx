import React from 'react';
import { Loader } from '../Loader';
import { TodoModalProps } from '../../types/TodoModalProps';

export const TodoModal: React.FC<TodoModalProps> = ({
  todo,
  user,
  isLoadingUser,
  onClose,
}) => {
  if (!todo) {
    return null;
  }

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" onClick={onClose} />

      {isLoadingUser ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #{todo.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={onClose}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todo.title}
            </p>

            <p className="block" data-cy="modal-user">
              {/* <strong className="has-text-success">Done</strong> */}
              <strong
                className={
                  todo.completed ? 'has-text-succes' : 'has-text-danger'
                }
              >
                {todo.completed ? 'Done' : 'Planned'}
              </strong>

              {' by '}

              {user && <a href="mailto:Sincere@april.biz">{user.name}</a>}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
