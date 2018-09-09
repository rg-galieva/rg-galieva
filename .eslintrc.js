module.exports = {
    "extends": ["airbnb", "plugin:jest/recommended"],
    "plugins": ["jest"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "jest/globals": true
    },
    "rules": {
        "import/extensions": ["off"],
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": [
            "off",
            {
                "devDependencies": true,
                "optionalDependencies": true,
                "peerDependencies": false
            }
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": ["warn", { ignore: ['children'] }],
        "react/require-default-props": ["off"],
        "react/sort-comp": ["warn"],
        "react/no-unused-prop-types": [1, { skipShapeProps: true }],
        "no-restricted-properties": ["error"],
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "jsx-a11y/anchor-is-valid": ["warn"],
        "jsx-a11y/click-events-have-key-events": ["warn"],
        "jsx-a11y/label-has-associated-control": ["off"],
        "jsx-a11y/label-has-for": ["off"],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};