<template>
  <button class="btn btn--primary" :disabled="isDisabled" >
    {{text}} 
    <span class="button__chevron">
      <img :src="`${baseUrl}icons/button-chevron.svg`" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
	props: ['text', 'isDisabled'],
	data() {
		return {
			baseUrl: process.env.BASE_URL
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

//component name
$component: 'btn';

//button properties
$btn-properties: (
font-family: $ff-regular,
font-color: color('white'),
font-size: 18,
border-radius: 100px,
border-style: solid,
border-width: 2px,
box-shadow: none,
text-decoration: none,
text-transform: none,
padding: 5px 10px,
position: relative,
button-height: 37px,
opacity: .5,
bg-color: color('ci'),
bg-color-hover: color('ci-hover'),
animation-duration: .2s,
width: 260px
);

//global placeholder to be extended in all buttons
%btn-basics {
	//includes
	@include prefix(box-shadow, map-get($btn-properties, box-shadow));
	@include fontSizeREM(map-get($btn-properties, font-size));

	//basic styles
	display: inline-block;
	cursor: pointer;
	position: relative;
	border-radius: map-get($btn-properties, border-radius);
	font-family: map-get($btn-properties, font-family);
	padding: map-get($btn-properties, padding);
	text-decoration: map-get($btn-properties, text-decoration);
	text-align: center;
	-webkit-tap-highlight-color: transparent;

	//animation
	@include prefix(transition, (
		background-color map-get($btn-properties, animation-duration) linear,
		border-color map-get($btn-properties, animation-duration) linear,
		color map-get($btn-properties, animation-duration) linear
	));

	//state style
	&:focus {
		outline: none;
	}

	&:before {
		background-color: color('red-dark');
		border-radius: 100px;
		box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
		content: '';
		display: inline-block;
		height: 100%;
		left: 0;
		position: absolute;
		transition: box-shadow .2s;
		width: 100%;
		z-index: -1;
	}

	&[disabled],
	&.is-disabled {
		cursor: not-allowed;
		opacity: map-get($btn-properties, opacity);
		pointer-events: none;

		&:before {
			display: none;
		}
	}

	//print
	@media print {
		display: none !important;
	}
}


/* mixin: create-btn
========================================================================== */
@mixin create-btn(
	/* mixin parameters */
	//misc
	$btn-height: map-get($btn-properties, button-height),
	$btn-block: false,
	$btn-font-size: map-get($btn-properties, font-size),
	$btn-font-weight: 100,
	$btn-letter-spacing: normal,
	$btn-text-transform: map-get($btn-properties, text-transform),
	//background color
	$btn-bg-color: map-get($btn-properties, bg-color),
	$btn-bg-color-hover: map-get($btn-properties, bg-color-hover),
	$btn-bg-color-active: map-get($btn-properties, bg-color-hover),
	//border color
	$btn-border-color: $btn-bg-color,
	$btn-border-color-hover: $btn-bg-color-hover,
	$btn-border-color-active: $btn-bg-color-active,
	//font color
	$btn-font-color: map-get($btn-properties, font-color),
	$btn-font-color-hover: $btn-font-color,
	$btn-font-color-active: $btn-font-color,
	$btn-border-radius: map-get($btn-properties, border-radius)
) {
	//basic styles
	@extend %btn-basics;

	//custom styles
	@include fontSizeREM($btn-font-size);
	border: map-get($btn-properties, border-style) map-get($btn-properties, border-width) $btn-border-color;
	background: $btn-bg-color;
	color: $btn-font-color;
	line-height: 160%;
	font-weight: $btn-font-weight;
	letter-spacing: $btn-letter-spacing;
	text-transform: $btn-text-transform;
	white-space: nowrap;
	margin: 0 0 1rem;
	border-radius: $btn-border-radius;
	padding-right: 40px;
	width: 260px;

	//block styles
	@if $btn-block == true {
		display: block;
		text-align: center;
		width: 100%;
	}

	//state style
	&:hover {
		background: $btn-bg-color-hover;
		border-color: $btn-border-color-hover;
		color: $btn-font-color-hover;

		&:before {
			box-shadow: none;
		}
	}

	&:active {
		background: $btn-bg-color-active;
		border-color: $btn-border-color-active;
		color: $btn-font-color-active;
	}

	&[disabled],
	&.is-disabled {
		&:hover,
		&:active {
			background: $btn-bg-color;
			border-color: $btn-border-color;
			color: $btn-font-color;
		}
	}

	svg {
		height: 20px;
		position: absolute;
		top: 10px;
		right: 17px;
	}
}


/* ==========================================================================
   Buttons
   ========================================================================== */
// btn
%#{$component} {
	@include create-btn();
}


// btn--primary
.#{$component}--primary {
	display: flex;
  padding: 5px 15px;
}

// btn--secondary
.#{$component}--secondary {
	@include create-btn(
		$btn-bg-color: color('ci-hover'),
		$btn-bg-color-hover: color('ci'),
		$btn-bg-color-active: color('ci'),
		$btn-border-color: color('ci-hover'),
		$btn-border-color-hover: color('ci-hover'),
		$btn-border-color-active: color('ci-hover')
	);
}

// btn--block
.#{$component}--block {
	width: 100%;
}


//component class
.#{$component},
.#{$component}--input {
	@extend %#{$component};
}

.#{$component}--input__btn {
	@include fontSizeREM(18);
	background: transparent;
	border: 0;
}


.#{$component}-cta__wrapper {
	margin: 0 auto;
	position: relative;
	text-align: center;
}
.#{$component}--cta {
	margin-bottom: $softgrid-gutter-width *7;
	width: auto;

	.#{$component}--input {
		width: auto;
	}
}


/* ==========================================================================
   Button-group (btn-group)
   ========================================================================== */

%#{$component}-group {
	@include clearfix();
	margin: 1rem 0;
	padding: 0;
	list-style: none;

	a,
	button,
	li {
		margin: 0 0 1rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	li {
		display: block;
		text-align: center;

		@include respondMin(point('min-lg')) {
			text-align: inherit;
		}
	}

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
}

// btn-group
.#{$component}-group {
	@extend %#{$component}-group;
}

// btn-group--centered
.#{$component}-group--centered {
	@extend %#{$component}-group;
	text-align: center;
}

// btn-group--right
.#{$component}-group--right {
	@extend %#{$component}-group;
	text-align: right;
}

// btn-group--inline
.#{$component}-group--inline {
	@extend %#{$component}-group;

	li {
		display: inline-block;
		word-spacing: normal;
	}
}

.#{$component}--plain {
	@include fontSizeREM(18);
	@include font($ff-deco);
	background: none;
	border: none;
	border-bottom: 4px solid color('ci');
	border-radius: 0;
	color: color('ci');
	line-height: 1;
	padding: 0 0 2px 0;
	transition: color 0.2s linear;
	transition: border-color 0.2s linear;
	text-transform: uppercase;
	width: auto;

	&:before {
		display: none;
	}

	&:hover {
		background: none;
		border-color: color('black');
		color: color('black');
	}

	& svg {
		display: none;
	}
}

.button__chevron {
  margin-left: auto;
  img {
    transform: rotate(90deg);
  }
}
</style>
