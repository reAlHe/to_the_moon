import "../App.css";

export const EmailSection = () => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <div className="email-section">
      <h2 className="text-1xl font-bold">To the Moon</h2>

      <form method="post" onSubmit={handleSubmit}>
        <textarea
          className="border-2"
          name="postContent"
          defaultValue="Here you can type your Email...."
          rows={10}
          cols={40}
        />
        <button className="btn" type="submit">
          Save post
        </button>
      </form>
    </div>
  );
};

export default EmailSection;
