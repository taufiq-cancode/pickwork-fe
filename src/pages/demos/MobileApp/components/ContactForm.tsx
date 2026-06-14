import { Col, Container, Row, Button, Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { BsEnvelopeOpenFill, BsSend, BsCheckCircle } from "react-icons/bs";
import TextFormInput from "@/components/form/TextFormInput";
import TextAreaFormInput from "@/components/form/TextAreaFormInput";
import SelectFormInput from "@/components/form/SelectFormInput";
import { submitContactForm } from "@/helpers/contactService";

type ContactFormData = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

const contactSchema = yup.object({
    fullName: yup.string().required("Please enter your full name"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    subject: yup.string().required("Please select a subject"),
    message: yup
        .string()
        .min(10, "Message must be at least 10 characters")
        .required("Please enter your message"),
});

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { control, handleSubmit, reset } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus("loading");
        setErrorMessage("");

        try {
            await submitContactForm(data);
            setSubmitStatus("success");
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (err) {
            setSubmitStatus("error");
            setErrorMessage(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section className="position-relative py-5" id="contact">
            <Container>
                <div className="bg-light rounded position-relative overflow-hidden p-4 p-sm-6">
                    {/* Decorative SVG elements */}
                    <figure className="position-absolute top-0 start-0 mt-n2 ms-n2 opacity-25">
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="60"
                                cy="60"
                                r="60"
                                className="fill-primary"
                                opacity="0.1"
                            />
                            <circle
                                cx="60"
                                cy="60"
                                r="40"
                                className="fill-primary"
                                opacity="0.15"
                            />
                            <circle
                                cx="60"
                                cy="60"
                                r="20"
                                className="fill-primary"
                                opacity="0.2"
                            />
                        </svg>
                    </figure>

                    <figure className="position-absolute bottom-0 end-0 mb-n3 me-n3 opacity-25">
                        <svg
                            width="160"
                            height="160"
                            viewBox="0 0 160 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="20"
                                y="20"
                                width="120"
                                height="120"
                                rx="60"
                                className="fill-primary"
                                opacity="0.08"
                            />
                            <rect
                                x="40"
                                y="40"
                                width="80"
                                height="80"
                                rx="40"
                                className="fill-primary"
                                opacity="0.12"
                            />
                        </svg>
                    </figure>

                    <Row className="g-4 g-lg-5">
                        {/* Left Column - Info */}
                        <Col lg={5}>
                            <div className="pe-lg-4">
                                <div className="icon-lg bg-primary text-white rounded-circle mb-4 flex-centered">
                                    <BsEnvelopeOpenFill size={28} />
                                </div>

                                <h2 className="mb-3">Get In Touch</h2>
                                <p className="mb-4 text-secondary">
                                    Have a question, feedback, or need support?
                                    We'd love to hear from you. Fill out the
                                    form and our team will get back to you as
                                    soon as possible.
                                </p>

                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="icon-md bg-dark bg-opacity-10 rounded-circle flex-centered flex-shrink-0"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757ZM16 11.801V4.697l-5.803 3.546L16 11.801Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small className="text-secondary d-block">
                                                Email us
                                            </small>
                                            <span className="fw-semibold">
                                                info@pickwork.co
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="icon-md bg-dark bg-opacity-10 rounded-circle flex-centered flex-shrink-0"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small className="text-secondary d-block">
                                                Based in
                                            </small>
                                            <span className="fw-semibold">
                                                Nigeria
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="icon-md bg-dark bg-opacity-10 rounded-circle flex-centered flex-shrink-0"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small className="text-secondary d-block">
                                                Response time
                                            </small>
                                            <span className="fw-semibold">
                                                Within 24 hours
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Right Column - Form */}
                        <Col lg={7}>
                            <div className="bg-white rounded p-4 p-sm-5 shadow-sm">
                                {submitStatus === "success" && (
                                    <Alert
                                        variant="success"
                                        className="d-flex align-items-center gap-2 mb-4"
                                        id="contact-form-success"
                                    >
                                        <BsCheckCircle size={20} />
                                        <div>
                                            <strong>Message sent!</strong> We'll
                                            get back to you shortly.
                                        </div>
                                    </Alert>
                                )}

                                {submitStatus === "error" && (
                                    <Alert
                                        variant="danger"
                                        className="mb-4"
                                        id="contact-form-error"
                                    >
                                        {errorMessage}
                                    </Alert>
                                )}

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    id="contact-form"
                                    noValidate
                                >
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <TextFormInput
                                                name="fullName"
                                                control={control}
                                                label="Full Name"
                                                placeholder="John Doe"
                                                id="contact-fullName"
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <TextFormInput
                                                name="email"
                                                control={control}
                                                type="email"
                                                label="Email Address"
                                                placeholder="john@example.com"
                                                id="contact-email"
                                            />
                                        </Col>

                                        <Col xs={12}>
                                            <SelectFormInput
                                                name="subject"
                                                control={control}
                                                label="Subject"
                                                id="contact-subject"
                                            >
                                                <option value="">
                                                    Select a topic...
                                                </option>
                                                <option value="General Inquiry">
                                                    General Inquiry
                                                </option>
                                                <option value="Technical Support">
                                                    Technical Support
                                                </option>
                                                <option value="Partnership">
                                                    Partnership
                                                </option>
                                                <option value="Feedback">
                                                    Feedback
                                                </option>
                                                <option value="Bug Report">
                                                    Bug Report
                                                </option>
                                                <option value="Other">
                                                    Other
                                                </option>
                                            </SelectFormInput>
                                        </Col>

                                        <Col xs={12}>
                                            <TextAreaFormInput
                                                name="message"
                                                control={control}
                                                label="Message"
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                id="contact-message"
                                            />
                                        </Col>

                                        <Col xs={12}>
                                            <Button
                                                type="submit"
                                                variant="dark"
                                                className="d-flex align-items-center gap-2"
                                                disabled={
                                                    submitStatus === "loading"
                                                }
                                                id="contact-submit-btn"
                                            >
                                                {submitStatus === "loading" ? (
                                                    <>
                                                        <Spinner
                                                            animation="border"
                                                            size="sm"
                                                        />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <BsSend size={16} />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;
