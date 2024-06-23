import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Col, Row } from "react-bootstrap";
type GridListProps<T> = {
  records: T[];
  renderItems: (Record: T) => React.ReactNode;
  emptyMessage: string;
};

type HasId = {
  id?: number;
};

const GridList = <T extends HasId>({
  emptyMessage,
  records,
  renderItems,
}: GridListProps<T>) => {
  const categoriesList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          key={record.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItems(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <Row>{categoriesList}</Row>;
};

export default GridList;
