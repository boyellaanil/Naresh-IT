import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../redux/thunk/registerThunk";
import { fetchPostData } from "./../redux/thunk/postThunk";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Styles from './home.module.css'
const HomePage = () => {
  let users = useSelector((state) => state.register.userData);
  let post = useSelector((state) => state.post.posts);
  let dispatch = useDispatch();
  let [like,setLike]=useState(false);
  let handleLike=()=>{
    setLike(true)
  }
  useEffect(() => {
    dispatch(fetchUsersData());
    dispatch(fetchPostData);
  }, []);
  console.log(users);
  console.log(post);
  return (
    <section id={Styles.home}>
      <section>
        {users.map((value) => {
          return (
            <article>
              <figure>
                <img src={value.image} alt="" />
              </figure>
              <p>{value.name}</p>
              <button>Follow</button>
            </article>
          );
        })}
      </section>
      <section>
        {post.map((value) => {
          return (
            <article>
              <figure>
                <img src={value.img} alt="" />
                <figcaption>
                  <FaHeart className={like&&Styles.like} onDoubleClick={handleLike}/>
                  <FaComment />
                  <FaShare />
                </figcaption>
              </figure>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default HomePage;
