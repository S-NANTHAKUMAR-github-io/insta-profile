import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Col, Row, Spin, Typography } from "antd";
import { CardMedia, Card, CardActionArea } from "@mui/material";

const MainContent = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        );
        if (response.data.length === 0) {
          setHasMore(false);
          return;
        }
        console.log(response);
        setImages((prevImages) => [...prevImages, ...response.data]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <div>
        {images.length > 0 ? (
          <InfiniteScroll
            dataLength={images.length}
            next={loadMoreImages}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
            endMessage={<p>No more images to load</p>}
          >
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
              className="gap-y-[45px]  relative left-[30px]"
            >
              {images.map((image) => (
                <>
                  <Col
                    key={image.id}
                    className="gutter-row "
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                  >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={image.url}
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          </InfiniteScroll>
        ) : (
          <>
            <Spin size="large" />
          </>
        )}
      </div>
    </>
  );
};

export default MainContent;
