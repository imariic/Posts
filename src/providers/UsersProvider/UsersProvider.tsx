import React from "react";
import { withDisplayName } from "hoc";
import { useUsers } from "hooks";

export const UsersContext = React.createContext<UserType[]>([]);

interface UsersProviderProps {
  children: React.ReactNode;
}

const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const users = useUsers();

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

UsersProvider.displayName = "UsersProvider";

export default withDisplayName(UsersProvider);
