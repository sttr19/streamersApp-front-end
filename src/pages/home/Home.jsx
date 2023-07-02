import { useDispatch, useSelector } from "react-redux";
import StreamerComp from "../../components/streamer/StreamerComp";
import styles from "../home/Home.module.css";
import { useEffect } from "react";
import { fetchStreamers } from "../../redux/slices/streamersSlice.js";
//import { UseSelector } from "react-redux/es/hooks/useSelector.js";

export const Home = () => {
  const dispatch = useDispatch();
  const { streamers } = useSelector((state) => state.streamers);
  console.log(streamers);
  useEffect(() => {
    dispatch(fetchStreamers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["home-wrapper"]}>
      {streamers.items.map((item, index) => (
        <StreamerComp key={`${item.name}_${index}`} {...item} />
      ))}
    </div>
  );
};
