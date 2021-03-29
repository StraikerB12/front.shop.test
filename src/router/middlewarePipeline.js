

// Конвеер Middleware, рекурсивный проход по Middleware роута
function middlewarePipeline (context, middleware, index) {
   


    const nextMiddleware = middleware[index]; // Выборка очередного Middleware
    if(!nextMiddleware){ return context.next} // Рекусивный случай, есть ли еще Middleware в очереди

    return () => {
        const nextPipeline = middlewarePipeline(context, middleware, index + 1); // Рекурсивный вызов
        nextMiddleware({ ...context, next: nextPipeline}); // Выполнение очередного Middleware
    }
}

export default middlewarePipeline;