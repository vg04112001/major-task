import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const WishList = () => {
  const wish = useSelector((state) => state.wishListReducer);
  // console.log(wish);
  return (
    <Container>
      <Row>
        <h2 className="text-center">Wish List</h2>
        {wish.length ? (
          wish.map((item) => {
            return (
              <>
                <Col lg={4} key={wish.id}>
                  <img src={`${item.imgPath}`} alt="wishListImg" width={50} height={50} />
                </Col>
                <Col lg={4}>{item.title}</Col>
                <Col lg={4}>{item.desc}</Col>
              </>
            );
          })
        ) : (
          <h3 className="text-center">Add to see the wishlist</h3>
        )}
      </Row>
    </Container>
  );
};

export default WishList;