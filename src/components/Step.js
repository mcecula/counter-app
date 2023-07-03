const Step = (props) => {
    return (
        <input type="number" min="1" value={props.step} onChange={(event) => { props.updateStep(event.target.value) }} />
    );
}

export default Step;