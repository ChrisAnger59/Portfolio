

function SkillCat({title, items, className=''}) {
    return (
        <div className={`skillCat-card ${className}`.trim()}>
            <h3>{title}</h3>
            <ul>
                {items.map((item) => 
                <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default SkillCat