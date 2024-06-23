import { Heading } from "@components/common";
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { Input } from "@components/Form";
import { Navigate } from "react-router-dom";
import useRegister from "@hooks/useRegister";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    register,
    handleSubmit,
    formsErorr,
    submitForm,
    emailOnBlurHandler,
    emailAvailabilityStatus,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              register={register}
              name="firstName"
              error={formsErorr.firstName?.message}
            />

            <Input
              label="Last Name"
              register={register}
              name="lastName"
              error={formsErorr.lastName?.message}
            />

            <Input
              label="Email address"
              register={register}
              name="email"
              onBlur={emailOnBlurHandler}
              error={
                formsErorr.email?.message
                  ? formsErorr.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />

            <Input
              label="Password"
              register={register}
              name="password"
              error={formsErorr.password?.message}
              type="password"
            />

            <Input
              label="Confirm Password"
              register={register}
              name="confirmPassword"
              error={formsErorr.confirmPassword?.message}
              type="password"
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
