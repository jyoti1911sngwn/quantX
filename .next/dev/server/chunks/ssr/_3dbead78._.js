module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/forms/InputField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const InputField = ({ name, label, placeholder, register, error, validation, type, disabled, value })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: name,
                className: "form-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/forms/InputField.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                type: type,
                id: name,
                placeholder: placeholder,
                disabled: disabled,
                value: value,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('form-input', {
                    'opcaity-50 cursor-not-allowed': disabled
                }, {
                    ...register(name, validation)
                })
            }, void 0, false, {
                fileName: "[project]/components/forms/InputField.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/InputField.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = InputField;
}),
"[project]/components/forms/SelectField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
;
;
;
const SelectField = ({ name, label, placeholder, options, control, error, required })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: name,
                className: "form-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/forms/SelectField.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
                name: name,
                control: control,
                rules: {
                    required: required ? `${label} is required` : false
                }
            }, void 0, false, {
                fileName: "[project]/components/forms/SelectField.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/SelectField.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SelectField;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALERT_TYPE_OPTIONS",
    ()=>ALERT_TYPE_OPTIONS,
    "BASELINE_WIDGET_CONFIG",
    ()=>BASELINE_WIDGET_CONFIG,
    "CANDLE_CHART_WIDGET_CONFIG",
    ()=>CANDLE_CHART_WIDGET_CONFIG,
    "COMPANY_FINANCIALS_WIDGET_CONFIG",
    ()=>COMPANY_FINANCIALS_WIDGET_CONFIG,
    "COMPANY_PROFILE_WIDGET_CONFIG",
    ()=>COMPANY_PROFILE_WIDGET_CONFIG,
    "CONDITION_OPTIONS",
    ()=>CONDITION_OPTIONS,
    "HEATMAP_WIDGET_CONFIG",
    ()=>HEATMAP_WIDGET_CONFIG,
    "INVESTMENT_GOALS",
    ()=>INVESTMENT_GOALS,
    "MARKET_DATA_WIDGET_CONFIG",
    ()=>MARKET_DATA_WIDGET_CONFIG,
    "MARKET_OVERVIEW_WIDGET_CONFIG",
    ()=>MARKET_OVERVIEW_WIDGET_CONFIG,
    "NAV_ITEMS",
    ()=>NAV_ITEMS,
    "NO_MARKET_NEWS",
    ()=>NO_MARKET_NEWS,
    "POPULAR_STOCK_SYMBOLS",
    ()=>POPULAR_STOCK_SYMBOLS,
    "PREFERRED_INDUSTRIES",
    ()=>PREFERRED_INDUSTRIES,
    "RISK_TOLERANCE_OPTIONS",
    ()=>RISK_TOLERANCE_OPTIONS,
    "SYMBOL_INFO_WIDGET_CONFIG",
    ()=>SYMBOL_INFO_WIDGET_CONFIG,
    "TECHNICAL_ANALYSIS_WIDGET_CONFIG",
    ()=>TECHNICAL_ANALYSIS_WIDGET_CONFIG,
    "TOP_STORIES_WIDGET_CONFIG",
    ()=>TOP_STORIES_WIDGET_CONFIG,
    "WATCHLIST_TABLE_HEADER",
    ()=>WATCHLIST_TABLE_HEADER
]);
const NAV_ITEMS = [
    {
        href: '/',
        label: 'Dashboard'
    },
    {
        href: '/search',
        label: 'Search'
    }
];
const INVESTMENT_GOALS = [
    {
        value: 'Growth',
        label: 'Growth'
    },
    {
        value: 'Income',
        label: 'Income'
    },
    {
        value: 'Balanced',
        label: 'Balanced'
    },
    {
        value: 'Conservative',
        label: 'Conservative'
    }
];
const RISK_TOLERANCE_OPTIONS = [
    {
        value: 'Low',
        label: 'Low'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'High',
        label: 'High'
    }
];
const PREFERRED_INDUSTRIES = [
    {
        value: 'Technology',
        label: 'Technology'
    },
    {
        value: 'Healthcare',
        label: 'Healthcare'
    },
    {
        value: 'Finance',
        label: 'Finance'
    },
    {
        value: 'Energy',
        label: 'Energy'
    },
    {
        value: 'Consumer Goods',
        label: 'Consumer Goods'
    }
];
const ALERT_TYPE_OPTIONS = [
    {
        value: 'upper',
        label: 'Upper'
    },
    {
        value: 'lower',
        label: 'Lower'
    }
];
const CONDITION_OPTIONS = [
    {
        value: 'greater',
        label: 'Greater than (>)'
    },
    {
        value: 'less',
        label: 'Less than (<)'
    }
];
const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark',
    dateRange: '12M',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#0FEDBE',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',
    tabs: [
        {
            title: 'Financial',
            symbols: [
                {
                    s: 'NYSE:JPM',
                    d: 'JPMorgan Chase'
                },
                {
                    s: 'NYSE:WFC',
                    d: 'Wells Fargo Co New'
                },
                {
                    s: 'NYSE:BAC',
                    d: 'Bank Amer Corp'
                },
                {
                    s: 'NYSE:HSBC',
                    d: 'Hsbc Hldgs Plc'
                },
                {
                    s: 'NYSE:C',
                    d: 'Citigroup Inc'
                },
                {
                    s: 'NYSE:MA',
                    d: 'Mastercard Incorporated'
                }
            ]
        },
        {
            title: 'Technology',
            symbols: [
                {
                    s: 'NASDAQ:AAPL',
                    d: 'Apple'
                },
                {
                    s: 'NASDAQ:GOOGL',
                    d: 'Alphabet'
                },
                {
                    s: 'NASDAQ:MSFT',
                    d: 'Microsoft'
                },
                {
                    s: 'NASDAQ:FB',
                    d: 'Meta Platforms'
                },
                {
                    s: 'NYSE:ORCL',
                    d: 'Oracle Corp'
                },
                {
                    s: 'NASDAQ:INTC',
                    d: 'Intel Corp'
                }
            ]
        },
        {
            title: 'Services',
            symbols: [
                {
                    s: 'NASDAQ:AMZN',
                    d: 'Amazon'
                },
                {
                    s: 'NYSE:BABA',
                    d: 'Alibaba Group Hldg Ltd'
                },
                {
                    s: 'NYSE:T',
                    d: 'At&t Inc'
                },
                {
                    s: 'NYSE:WMT',
                    d: 'Walmart'
                },
                {
                    s: 'NYSE:V',
                    d: 'Visa'
                }
            ]
        }
    ],
    support_host: 'https://www.tradingview.com',
    backgroundColor: '#141414',
    width: '100%',
    height: 600,
    showSymbolLogo: true,
    showChart: true
};
const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SPX500',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600'
};
const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600'
};
const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                {
                    name: 'NYSE:JPM',
                    displayName: 'JPMorgan Chase'
                },
                {
                    name: 'NYSE:WFC',
                    displayName: 'Wells Fargo Co New'
                },
                {
                    name: 'NYSE:BAC',
                    displayName: 'Bank Amer Corp'
                },
                {
                    name: 'NYSE:HSBC',
                    displayName: 'Hsbc Hldgs Plc'
                },
                {
                    name: 'NYSE:C',
                    displayName: 'Citigroup Inc'
                },
                {
                    name: 'NYSE:MA',
                    displayName: 'Mastercard Incorporated'
                }
            ]
        },
        {
            name: 'Technology',
            symbols: [
                {
                    name: 'NASDAQ:AAPL',
                    displayName: 'Apple'
                },
                {
                    name: 'NASDAQ:GOOGL',
                    displayName: 'Alphabet'
                },
                {
                    name: 'NASDAQ:MSFT',
                    displayName: 'Microsoft'
                },
                {
                    name: 'NASDAQ:FB',
                    displayName: 'Meta Platforms'
                },
                {
                    name: 'NYSE:ORCL',
                    displayName: 'Oracle Corp'
                },
                {
                    name: 'NASDAQ:INTC',
                    displayName: 'Intel Corp'
                }
            ]
        },
        {
            name: 'Services',
            symbols: [
                {
                    name: 'NASDAQ:AMZN',
                    displayName: 'Amazon'
                },
                {
                    name: 'NYSE:BABA',
                    displayName: 'Alibaba Group Hldg Ltd'
                },
                {
                    name: 'NYSE:T',
                    displayName: 'At&t Inc'
                },
                {
                    name: 'NYSE:WMT',
                    displayName: 'Walmart'
                },
                {
                    name: 'NYSE:V',
                    displayName: 'Visa'
                }
            ]
        }
    ]
};
const SYMBOL_INFO_WIDGET_CONFIG = (symbol)=>({
        symbol: symbol.toUpperCase(),
        colorTheme: 'dark',
        isTransparent: true,
        locale: 'en',
        width: '100%',
        height: 170
    });
const CANDLE_CHART_WIDGET_CONFIG = (symbol)=>({
        allow_symbol_change: false,
        calendar: false,
        details: true,
        hide_side_toolbar: true,
        hide_top_toolbar: false,
        hide_legend: false,
        hide_volume: false,
        hotlist: false,
        interval: 'D',
        locale: 'en',
        save_image: false,
        style: 1,
        symbol: symbol.toUpperCase(),
        theme: 'dark',
        timezone: 'Etc/UTC',
        backgroundColor: '#141414',
        gridColor: '#141414',
        watchlist: [],
        withdateranges: false,
        compareSymbols: [],
        studies: [],
        width: '100%',
        height: 600
    });
const BASELINE_WIDGET_CONFIG = (symbol)=>({
        allow_symbol_change: false,
        calendar: false,
        details: false,
        hide_side_toolbar: true,
        hide_top_toolbar: false,
        hide_legend: false,
        hide_volume: false,
        hotlist: false,
        interval: 'D',
        locale: 'en',
        save_image: false,
        style: 10,
        symbol: symbol.toUpperCase(),
        theme: 'dark',
        timezone: 'Etc/UTC',
        backgroundColor: '#141414',
        gridColor: '#141414',
        watchlist: [],
        withdateranges: false,
        compareSymbols: [],
        studies: [],
        width: '100%',
        height: 600
    });
const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol)=>({
        symbol: symbol.toUpperCase(),
        colorTheme: 'dark',
        isTransparent: 'true',
        locale: 'en',
        width: '100%',
        height: 400,
        interval: '1h',
        largeChartUrl: ''
    });
const COMPANY_PROFILE_WIDGET_CONFIG = (symbol)=>({
        symbol: symbol.toUpperCase(),
        colorTheme: 'dark',
        isTransparent: 'true',
        locale: 'en',
        width: '100%',
        height: 440
    });
const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol)=>({
        symbol: symbol.toUpperCase(),
        colorTheme: 'dark',
        isTransparent: 'true',
        locale: 'en',
        width: '100%',
        height: 464,
        displayMode: 'regular',
        largeChartUrl: ''
    });
const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',
    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',
    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',
    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',
    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE'
];
const NO_MARKET_NEWS = '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';
const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action'
];
}),
"[project]/app/(auth)/sign-up/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/InputField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/SelectField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SignIn = ()=>{
    const { register, handleSubmit, watch, control, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'India',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    });
    const onSubmit = async (data)=>{
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "form-title",
                children: "Sign UP and Personalize"
            }, void 0, false, {
                fileName: "[project]/app/(auth)/sign-up/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "fullName",
                        label: "FullName",
                        placeholder: "Your Name",
                        register: register,
                        error: errors.fullName,
                        validation: {
                            required: "Full Name is required",
                            minLength: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-500",
                        children: errors.fullName.message
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 50,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "email",
                        label: "Email",
                        placeholder: "Enter Your Email",
                        register: register,
                        error: errors.email,
                        validation: {
                            required: "Email is required",
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            minLength: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 51,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "password",
                        label: "Password",
                        placeholder: "Enter Your Password",
                        register: register,
                        error: errors.password,
                        validation: {
                            required: "Password is required",
                            minLength: 6
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 59,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "investmentGoals",
                        label: "Investment Goals",
                        placeholder: "Select your investment goals",
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVESTMENT_GOALS"],
                        control: control,
                        error: errors.investmentGoals,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "yellow-btn w-full mt-5",
                        children: isSubmitting ? 'Creating Account...' : 'Start your Investing Journey'
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/sign-up/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(auth)/sign-up/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = SignIn;
}),
];

//# sourceMappingURL=_3dbead78._.js.map