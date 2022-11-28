import Form from "react-bootstrap/Form";

function Sort(props) {
  return (
    <div>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Title"
              value="Title"
              name="sort"
              checked={props.sortingMetric === "Title"}
              onChange={props.onChange}
              type={type}
              id={`default-${type}-1`}
            />
            <Form.Check
              inline
              label="Chapters"
              value="Chapters"
              name="sort"
              checked={props.sortingMetric === "Chapters"}
              onChange={props.onChange}
              type={type}
              id={`default-${type}-2`}
            />
            <Form.Check
              inline
              label="Followers"
              value="Followers"
              name="sort"
              checked={props.sortingMetric === "Followers"}
              onChange={props.onChange}
              type={type}
              id={`default-${type}-3`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
}

export default Sort;
