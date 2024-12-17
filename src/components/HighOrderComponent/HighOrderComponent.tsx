function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return function WithLoadingComponent({ isLoading, ...rest }: T & { isLoading: boolean }) {
    if (!isLoading) return <Component {...rest as T} />;
    return <p>Loading...</p>;
  };
}
type UserComponentProps = {
  name: string;
};
const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  return <p>Hola, {name}</p>;
}

const UserComponentWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserComponentWithLoading isLoading={true} name="Gonza"
      />
      <UserComponentWithLoading isLoading={false} name="Gonza"
      />
    </div>
  );
};
