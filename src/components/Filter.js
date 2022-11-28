import Form from "react-bootstrap/Form";

function CategoryFilter(props) {
  return (
    <div>
      <Form>
        <div>
          {[
            "Action",
            "Adventure",
            "Comedy",
            "Contemporary",
            "Fantasy",
            "Martial Arts",
            "Mystery",
            "Original",
            "Progression",
          ].map((category, i) => (
            <Form.Check
              key={i}
              type={"checkbox"}
              label={category}
              value={category}
              checked={props.categoryFilters.includes(category)}
              onChange={props.onChange}
            />
          ))}
        </div>
      </Form>
    </div>
  );
}

export function WarningFilter(props) {
  return (
    <div>
      <Form>
        <div>
          {["Gore", "Profanity", "Sexual Content", "Traumatising Content"].map(
            (category, i) => (
              <Form.Check
                key={i}
                type={"checkbox"}
                label={category}
                value={category}
                checked={props.warningFilters.includes(category)}
                onChange={props.onChange}
              />
            )
          )}
        </div>
      </Form>
    </div>
  );
}

export default CategoryFilter;
