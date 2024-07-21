const { default: Spinner } = require("../_components/Spinner");

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl to-primary-200">Loading cabin data...</p>
    </div>
  );
}

export default loading;
