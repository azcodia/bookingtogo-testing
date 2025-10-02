interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen = ({
  message = "Loading products...",
}: LoadingScreenProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    {/* GIF atau ilustrasi */}
    <img
      src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
      alt="Loading..."
      className="w-32 h-32 mb-6"
    />
    <p className="text-lg font-semibold text-gray-700 dark:text-white text-center px-4">
      {message}
    </p>
  </div>
);
