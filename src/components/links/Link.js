import React from 'react';

const Link = ({number, descr, active}) => (
<div class="link">
<a href="/">Link {number}</a>
<p>- {descr}</p>
</div>
);

export default Link;
