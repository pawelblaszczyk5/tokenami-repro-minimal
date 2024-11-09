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
            selector, but also parent element didn't get color correctly
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
          "--test-2_m": 4,
        })}
      >
        <div className="test-2">
          <p>We have margins which we shouldn't have</p>
          <p>And parent element doesn't have proper margin</p>
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
          <p>Now changing order does nothing I think?</p>
          <p style={css({ "--font-size": "var(--text-size_sm)" })}>
            have good background color?
          </p>
          <p>Bad again</p>
          <span>
            I have background color, because it got properly applied to parent
            element
          </span>
        </div>
      </div>
      <style>
        {/* This is just so margin don't collapse and we see it clearer */}
        {`.test-4 {
        display: flex;}`}
      </style>
      <div
        style={css({
          "--test-4_m": 4,
        })}
      >
        <div className="test-4">
          <p>We have margins which we shouldn't have</p>
          <p>But parent element has it correctly now</p>
          <p>
            Btw try to add another p tag after this with HMR turned on - React
            reuses the node of the one with `style` attribute but removes the
            value, which also impacts styling
          </p>
          <p style={{ background: "gray" }}>Same as before</p>
        </div>
      </div>
    </>
  );
};
