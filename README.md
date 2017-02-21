# Semantic Pattern Sandbox
Inspired by [patternlab.io](http://patternlab.io/), a pattern library toolkit
supporting semantic html component elements.

[Demo: https://emeraldwalk.github.io/semantic-pattern-playground/#!/pattern/person-list-editor](https://emeraldwalk.github.io/semantic-pattern-playground/#!/pattern/person-list-editor)

## Semantic Components
### Simple Pattern
```html
<div class="c-person-editor">
    <input value="John"/>
    <input value="Doe"/>
</div>
```

#### Template - person-editor.html
```html
<div class="c-person-editor">
    <input value="{{ firstName }}"/>
    <input value="{{ lastName }}"/>
</div>
```

#### Styles - person-editor.less
```less
.c-person-editor {
    display: block;
}
```

#### Data - person-editor.json
```json
{
    "firstName": "John",
    "lastName": "Doe"
}
```

### Complex Pattern
Complex patterns can use other patterns semantically.

eg. `<person-editor></person-editor>`

#### Template - person-list-editor.html
```html
<ul class="c-person-list-editor">
    <li>Edit People</li>
    <li><person-editor first-name="people[0].firstName"
                       last-name="people[0].lastName"></person-editor></li>
    <li><person-editor first-name="people[1].firstName"
                       last-name="people[1].lastName"></person-editor></li>
</ul>
```

#### Data - person-list-editor.json
```json
{
    "people": [
        {
            "firstName": "Jeff",
            "lastName": "Smith"
        },
        {
            "firstName": "James",
            "lastName": "Jones"
        }
    ]
}
```