import React from 'react';
import Usetitle from '../Tilehook/Usetitle';

const Blog = () => {
    Usetitle()
    return (
        <div>
            <div class="py-16 ">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="mb-12 my-6 space-y-2 text-center">
                        <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Welcome to my Blog</span>
                        <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                        <p class="lg:w-6/12 lg:mx-auto">Welcome to my blog.Here you can explore various expectional concept of programming and web development</p>
                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">What are the different ways to manage a state in a React application</h4>
                                        <p class="text-gray-600">Managing state in your React apps isn’t as simple as using useState or useReducer.

                                            Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                                            In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way....</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">How does prototypical inheritance work</h4>
                                        <p class="text-gray-600">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 space-y-2 text-center">

                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://i.ytimg.com/vi/lj5nnGa_DIw/maxresdefault.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">What is a unit test? Why should we write unit tests?</h4>
                                        <p class="text-gray-600">The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://miro.medium.com/max/800/1*RtAQYp558yHr9UjZzDJmAg.jpeg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">React vs. Angular vs. Vue</h4>
                                        <p class="text-gray-600">Vue provides higher customizability and hence is easier to learn than Angular or React.Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.Hence, the transition to Vue from either of the two is an easy option...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;