import { Link } from "react-router-dom";
import Loader from "../Loader";

import style from "./style.module.css";

// Links the router can't handle: other sites, phone numbers and email addresses.
const EXTERNAL_LINK = /^(https?:|tel:|mailto:|\/\/)/i;

// Spinner colour matching each button colour's text.
const SPINNER_COLOR = { black: '#FFFFFF', white: '#000000' };

// Renders a plain div when disabled or loading, a native <a> or a router Link when `to` is set,
// otherwise a native button.
// `external` forces <a> (true) or Link (false); left unset, it's detected from `to`.
function Button({
    size = 'medium',
    color = "black",
    type = "button",
    to = '',
    external,
    newTab = false,
    onClick,
    fullWidth,
    disabled,
    loading = false,
    className,
    children,
}) {
    const classes = [
        style.button,
        style[size],
        style[color],
        fullWidth && style.fullWidth,
        disabled && style.disabled,
        loading && style.loading,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (loading) {
        return (
            <div aria-disabled="true" aria-busy="true" className={classes}>
                {/* Kept in place but hidden so the button doesn't change width. */}
                <span className={style.label}>{children}</span>
                <Loader center size={20} color={SPINNER_COLOR[color]} className={style.spinner} />
            </div>
        )
    }

    if (disabled) {
        return (
            <div aria-disabled="true" className={classes}>
                {children}
            </div>
        )
    }

    if (to) {
        const isExternal = external ?? EXTERNAL_LINK.test(to);
        const tabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};

        if (isExternal) {
            return (
                <a href={to} onClick={onClick} className={classes} {...tabProps}>
                    {children}
                </a>
            )
        }

        return (
            <Link to={to} onClick={onClick} className={classes} {...tabProps}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    )
}

export default Button
