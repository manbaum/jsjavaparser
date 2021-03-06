
    test("class body ws fields", function(assert) {
      var src = multiline(function(){/*
        private final class Test {
          int RED = 1, GREEN = 2, BLUE = 4;
          float f = j;
          public int   j = 1;
          final int k = k + 1;
          ;
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "RED"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "GREEN"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "2"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "BLUE"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "4"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "float"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "SimpleName",
                                        identifier: "j"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "j"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "k"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "InfixExpression",
                                        leftOperand: {
                                            node: "SimpleName",
                                            identifier: "k"
                                        },
                                        operator: "+",
                                        rightOperand: {
                                            node: "NumberLiteral",
                                            token: "1"
                                        },
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws methods", function(assert) {
      var src = multiline(function(){/*
        private final class Test {
          void world() { }
          void semi() throws A { ; }
          public static boolean world(int[][] x){ ; }
          public static boolean[] world(int x) throws A, A.B {
            return x == 42;
          }
          public String world(int x, String y){
            return y;
          }
          public abstract T[][] get (); 
          public abstract void set (K entity);
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "semi"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "A"
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EmptyStatement"
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "PrimitiveType",
                                                primitiveTypeCode: "int"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EmptyStatement"
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "ArrayType",
                                componentType: {
                                    node: "PrimitiveType",
                                    primitiveTypeCode: "boolean"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "A"
                                },
                                {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "SimpleName",
                                        identifier: "A"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "B"
                                    }
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "x"
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "String"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "y"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "ArrayType",
                                componentType: {
                                    node: "ArrayType",
                                    componentType: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "T"
                                        }
                                    }
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "get"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "set"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "K"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "entity"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws generic methods", function(assert) {
      var src = multiline(function(){/*
        private final class Test {
          protected final <T> void fromArrayToCollection(T[] a, Collection<T> c) {
           for (T o : a) {
                c.add(o);
            }
            add(o);
            c.f.add(o);
            c.f.r.t.add(o.d);
          }
          public abstract <T,K> T[][] get () throws Exception; 
          abstract <H,W> void set (H[][][] hello, W world); 
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T"
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "fromArrayToCollection"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "T"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Collection"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T"
                                                }
                                            }
                                        ]
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T"
                                                }
                                            },
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "o"
                                            },
                                            extraDimensions: 0,
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "a"
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "c"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "add"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "SimpleName",
                                                                identifier: "o"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "o"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "f"
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "o"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "c"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "f"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "r"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "t"
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add"
                                            },
                                            arguments: [
                                                {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "o"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "d"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T"
                                    },
                                    typeBounds: []
                                },
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "K"
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "ArrayType",
                                componentType: {
                                    node: "ArrayType",
                                    componentType: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "T"
                                        }
                                    }
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "get"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "Exception"
                                }
                            ],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "H"
                                    },
                                    typeBounds: []
                                },
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "W"
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "set"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "H"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "hello"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "W"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "world"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws constructor", function(assert) {
      var src = multiline(function(){/*
        class Test {
          Test() {} 
          Test(int i){
            i++;
            int c = (int)(i--+--i);
          }
          Test(int y, int i) throws World {
            Test(i--);
            y += ++i;
          }
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "i"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "CastExpression",
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    expression: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "PostfixExpression",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: "--"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "PrefixExpression",
                                                                operator: "--",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            },
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "y"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "i"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "World"
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Test"
                                            },
                                            arguments: [
                                                {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "--"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "y"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "++",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws generic constructor", function(assert) {
      var src = multiline(function(){/*
        class MyClass<X> {
          <T> MyClass(T t) {
          }
          <T> MyClass() throws A {
            ;
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass"
                    },
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "X"
                            },
                            typeBounds: []
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T"
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "MyClass"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "T"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "t"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T"
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "MyClass"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "A"
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EmptyStatement"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws interface", function(assert) {
      var src = multiline(function(){/*
        abstract class MyClass {
          private interface Hello {
            void World();
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "abstract"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            interface: true,
                            name: {
                                node: "SimpleName",
                                identifier: "Hello"
                            },
                            typeParameters: [],
                            superclassType: null,
                            superInterfaceTypes: [],
                            bodyDeclarations: [
                                {
                                    node: "MethodDeclaration",
                                    modifiers: [],
                                    constructor: false,
                                    typeParameters: [],
                                    returnType2: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "void"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "World"
                                    },
                                    parameters: [],
                                    extraDimensions: 0,
                                    thrownExceptions: [],
                                    body: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws class", function(assert) {
      var src = multiline(function(){/*
        public class MyClass {
          final class Hello extends IHello {
            abstract void World();
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            interface: false,
                            name: {
                                node: "SimpleName",
                                identifier: "Hello"
                            },
                            typeParameters: [],
                            superclassType: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "IHello"
                                }
                            },
                            superInterfaceTypes: [],
                            bodyDeclarations: [
                                {
                                    node: "MethodDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "abstract"
                                        }
                                    ],
                                    constructor: false,
                                    typeParameters: [],
                                    returnType2: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "void"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "World"
                                    },
                                    parameters: [],
                                    extraDimensions: 0,
                                    thrownExceptions: [],
                                    body: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws enum", function(assert) {
      var src = multiline(function(){/*
        public class MyClass {
          public final enum Season { WINTER, SPRING, SUMMER,  FALL }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "EnumDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "Season"
                            },
                            superInterfaceTypes: [],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "WINTER"
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "SPRING"
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "SUMMER"
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "FALL"
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                }
                            ],
                            bodyDeclarations: []
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class body ws annotation", function(assert) {
      var src = multiline(function(){/*
        public class MyClass {
          @interface Preliminary { private interface ITest {}}
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "Preliminary"
                            },
                            bodyDeclarations: [
                                {
                                    node: "TypeDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "private"
                                        }
                                    ],
                                    interface: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "ITest"
                                    },
                                    typeParameters: [],
                                    superclassType: null,
                                    superInterfaceTypes: [],
                                    bodyDeclarations: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });
