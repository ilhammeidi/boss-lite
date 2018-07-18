module.exports = {
  head: [
    {
      label: 'KeyId',
    },
    {
      label: 'Dessert (100g serving)',
    },
    {
      label: 'Calories',
    },
    {
      label: 'Fat(g)',
    }
  ],
  body: [
    {
      id: '1',
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 24,
      child: [
        {
          id: '1_1',
          name: 'Frozen child 1',
          calories: 159,
          fat: 24,
        },
        {
          id: '1_2',
          name: 'Frozen child 2',
          calories: 159,
          fat: 24,
          child: [
            {
              id: '1_2_1',
              name: 'Frozen grand child 1',
              calories: 159,
              fat: 24,
            },
          ]
        },
      ]
    },
    {
      id: '2',
      name: 'Eclair',
      calories: 159,
      fat: 24,
      child: [
        {
          id: '2_1',
          name: 'Eclair Child',
          calories: 159,
          fat: 24,
          child: [
            {
              id: '2_1_1',
              name: 'Eclair Grand Child 1',
              calories: 159,
              fat: 24,
            },
            {
              id: '2_1_2',
              name: 'Eclair Grand Child 2',
              calories: 159,
              fat: 24,
            }
          ]
        },
      ]
    },
    {
      id: '3',
      name: 'Cupcake',
      calories: 159,
      fat: 24,
    },
    {
      id: '4',
      name: 'Ginger Bread',
      calories: 159,
      fat: 24,
      child: [
        {
          id: '4_1',
          name: 'Ginger Bread Child',
          calories: 159,
          fat: 24,
          child: [
            {
              id: '4_1_1',
              name: 'Ginger Bread Grand Child 1',
              calories: 159,
              fat: 24,
              child: [
                {
                  id: '4_1_1_1',
                  name: 'Ginger Bread Super Grand Child 1',
                  calories: 159,
                  fat: 24,
                },
                {
                  id: '4_1_1_2',
                  name: 'Ginger Bread Super Grand Child 2',
                  calories: 159,
                  fat: 24,
                },
              ]
            },
            {
              id: '4_1_2',
              name: 'Ginger Bread Grand Child 2',
              calories: 159,
              fat: 24,
            },
            {
              id: '4_1_3',
              name: 'Ginger Bread Grand Child 3',
              calories: 159,
              fat: 24,
            }
          ]
        },
      ]
    }
  ]
};
