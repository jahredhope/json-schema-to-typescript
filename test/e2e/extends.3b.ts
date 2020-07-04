export const input = {
  title: 'AnyShape',
  oneOf: [
    {
      $ref: '#/definitions/circle'
    },
    {
      $ref: '#/definitions/square'
    }
  ],
  definitions: {
    shape: {
      title: 'Shape',
      properties: {
        name: {type: 'string'},
        type: {type: 'string'}
      },
      additionalProperties: false,
      required: ['name', 'type']
    },
    circle: {
      title: 'Circle',
      type: 'object',
      extends: [
        {
          $ref: '#/definitions/shape'
        }
      ],
      properties: {
        type: {
          type: 'string',
          enum: ['circle']
        },
        radius: {
          type: 'number'
        }
      },
      required: ['type', 'radius'],
      additionalProperties: false
    },
    square: {
      title: 'Square',
      type: 'object',
      extends: [
        {
          $ref: '#/definitions/shape'
        }
      ],
      properties: {
        type: {
          type: 'string',
          enum: ['square']
        },
        height: {
          type: 'number'
        },
        width: {
          type: 'number'
        }
      },
      required: ['type', 'height', 'width'],
      additionalProperties: false
    }
  },
  additionalProperties: false
}

export const options = {
  declareExternallyReferenced: false
}
