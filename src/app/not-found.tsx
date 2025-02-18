export default function NotFound() {
    return (
      <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-500 mt-2">Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Home</a>
      </div>
    )
  }
  