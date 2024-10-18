const AuthorizationSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Authorization Submitted Successfully!
        </h2>
        <p className="text-gray-700">
          Your prior authorization request has been submitted.
        </p>
      </div>
    </div>
  );
};

export default AuthorizationSuccess;
