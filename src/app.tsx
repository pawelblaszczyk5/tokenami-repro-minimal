import { css } from "./css";

export const App = () => {
  return (
    <>
      <div
        style={css({
          "--prose-p_background-color": "var(--color_red8)",
          "--test-1_background-color": "var(--color_amber8)",
        })}
      >
        <div className="test-1">
          <p>
            I have different background color depending on swapping the order of
            selectors on parent element (I guess it's because stylesheet
            generates stuff in different order?) I never should have yellow
            background?
          </p>
          <p style={css({ "--font-size": "var(--text-size_sm)" })}>
            have good background color?
          </p>
          <p>Bad again</p>
          <span>
            I don't have any background color because there's no `prose-span`
            selector
          </span>
        </div>
      </div>
      <style>
        {/* This is just so margin don't collapse and we see it clearer */}
        {`.test-2 {
        display: flex;}`}
      </style>
      <div
        style={css({
          "--m": 2,
          "--test-2_m": 4,
        })}
      >
        <div className="test-2">
          <p>We have margins which we shouldn't have</p>
          <p>We have margins which we shouldn't have</p>
          <p style={{ background: "gray" }}>
            But only if no parent element has [style] attribute
          </p>
        </div>
      </div>
      <div
        style={css({
          "--prose-p_background-color": "var(--color_red8)",
          "--test-3_background-color": "var(--color_amber8)",
        })}
      >
        <div className="test-3">
          <p>
            Now this works correctly, because I slightly adjusted the selector
            in config
          </p>
          <p style={css({ "--font-size": "var(--text-size_sm)" })}>
            Yup, seems to work
          </p>
          <span>I don't have any background color correctly</span>
        </div>
      </div>
      <style>
        {/* This is just so margin don't collapse and we see it clearer */}
        {`.test-4 {
        display: flex;}`}
      </style>
      <div
        style={css({
          "--m": 2,
          "--test-4_m": 4,
        })}
      >
        <div className="test-4">
          <p>
            Now this works correctly, because I slightly adjusted the selector
            in config
          </p>
          <p style={{ background: "gray" }}>Yup, seems to work</p>
        </div>
      </div>
    </>
  );
};
